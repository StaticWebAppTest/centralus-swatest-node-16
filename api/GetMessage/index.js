module.exports = async function (context, req) {
  const date = "2022-10-31T06:15:40.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

