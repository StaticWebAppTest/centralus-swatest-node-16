module.exports = async function (context, req) {
  const date = "2023-11-28T17:08:20.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

