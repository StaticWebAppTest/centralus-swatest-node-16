module.exports = async function (context, req) {
  const date = "2023-07-27T06:11:37.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

