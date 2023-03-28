module.exports = async function (context, req) {
  const date = "2023-03-28T05:09:08.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

