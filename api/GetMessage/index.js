module.exports = async function (context, req) {
  const date = "2023-10-23T07:09:05.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

