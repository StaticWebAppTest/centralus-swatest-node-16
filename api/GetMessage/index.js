module.exports = async function (context, req) {
  const date = "2023-12-21T21:08:30.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

