module.exports = async function (context, req) {
  const date = "2023-10-20T13:11:28.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

