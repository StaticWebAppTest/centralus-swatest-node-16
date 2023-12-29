module.exports = async function (context, req) {
  const date = "2023-12-29T09:09:32.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

