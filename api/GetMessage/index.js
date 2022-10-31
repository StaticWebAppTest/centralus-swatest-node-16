module.exports = async function (context, req) {
  const date = "2022-10-31T08:18:20.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

