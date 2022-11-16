module.exports = async function (context, req) {
  const date = "2022-11-16T11:09:30.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

