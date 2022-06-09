module.exports = async function (context, req) {
  const date = "2022-06-09T23:10:15.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

