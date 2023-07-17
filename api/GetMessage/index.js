module.exports = async function (context, req) {
  const date = "2023-07-17T14:09:25.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

