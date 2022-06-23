module.exports = async function (context, req) {
  const date = "2022-06-23T15:12:15.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

