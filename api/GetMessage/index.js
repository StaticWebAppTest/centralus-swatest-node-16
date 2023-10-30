module.exports = async function (context, req) {
  const date = "2023-10-30T21:07:18.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

