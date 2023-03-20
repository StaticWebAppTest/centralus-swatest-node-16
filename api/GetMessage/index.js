module.exports = async function (context, req) {
  const date = "2023-03-20T16:14:23.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

