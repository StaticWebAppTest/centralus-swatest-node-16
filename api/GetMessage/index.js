module.exports = async function (context, req) {
  const date = "2023-11-27T11:07:49.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

