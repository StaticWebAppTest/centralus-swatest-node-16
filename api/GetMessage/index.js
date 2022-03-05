module.exports = async function (context, req) {
  const date = "2022-03-05T23:09:09.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

