module.exports = async function (context, req) {
  const date = "2022-10-17T13:54:45.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

