module.exports = async function (context, req) {
  const date = "2022-04-24T09:10:45.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

