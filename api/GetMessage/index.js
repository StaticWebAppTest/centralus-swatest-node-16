module.exports = async function (context, req) {
  const date = "2023-12-10T08:11:28.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

