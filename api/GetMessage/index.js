module.exports = async function (context, req) {
  const date = "2023-07-10T16:13:18.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

