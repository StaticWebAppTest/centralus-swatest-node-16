module.exports = async function (context, req) {
  const date = "2022-08-28T21:11:25.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

