module.exports = async function (context, req) {
  const date = "2023-07-28T00:46:15.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

