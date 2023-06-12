module.exports = async function (context, req) {
  const date = "2023-06-12T15:09:08.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

