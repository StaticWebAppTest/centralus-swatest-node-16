module.exports = async function (context, req) {
  const date = "2022-07-17T01:03:30.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

