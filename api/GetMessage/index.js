module.exports = async function (context, req) {
  const date = "2023-03-14T09:11:09.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

