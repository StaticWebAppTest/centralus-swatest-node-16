module.exports = async function (context, req) {
  const date = "2023-05-25T08:11:23.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

