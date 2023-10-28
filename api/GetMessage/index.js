module.exports = async function (context, req) {
  const date = "2023-10-28T16:09:50.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

