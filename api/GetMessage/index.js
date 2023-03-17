module.exports = async function (context, req) {
  const date = "2023-03-17T05:09:08.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

