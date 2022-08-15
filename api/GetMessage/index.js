module.exports = async function (context, req) {
  const date = "2022-08-15T11:09:16.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

