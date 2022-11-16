module.exports = async function (context, req) {
  const date = "2022-11-16T23:10:45.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

