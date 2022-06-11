module.exports = async function (context, req) {
  const date = "2022-06-11T23:09:45.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

