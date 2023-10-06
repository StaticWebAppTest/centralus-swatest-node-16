module.exports = async function (context, req) {
  const date = "2023-10-06T17:08:06.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

