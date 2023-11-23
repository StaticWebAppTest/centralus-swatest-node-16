module.exports = async function (context, req) {
  const date = "2023-11-23T13:12:08.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

