module.exports = async function (context, req) {
  const date = "2023-10-12T23:09:08.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

