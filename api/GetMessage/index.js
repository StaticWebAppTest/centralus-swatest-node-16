module.exports = async function (context, req) {
  const date = "2023-10-04T11:07:41.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

