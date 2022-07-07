module.exports = async function (context, req) {
  const date = "2022-07-07T11:09:50.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

