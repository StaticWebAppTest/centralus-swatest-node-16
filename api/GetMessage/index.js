module.exports = async function (context, req) {
  const date = "2023-10-11T03:09:36.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

