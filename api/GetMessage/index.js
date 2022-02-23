module.exports = async function (context, req) {
  const date = "2022-02-23T13:14:54.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

