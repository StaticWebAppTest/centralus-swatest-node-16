module.exports = async function (context, req) {
  const date = "2023-07-10T19:07:53.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

