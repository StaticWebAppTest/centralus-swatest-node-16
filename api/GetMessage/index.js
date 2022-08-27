module.exports = async function (context, req) {
  const date = "2022-08-27T09:10:45.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

