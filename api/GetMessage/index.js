module.exports = async function (context, req) {
  const date = "2022-07-11T23:10:30.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

