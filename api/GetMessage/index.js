module.exports = async function (context, req) {
  const date = "2022-05-02T14:15:14.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

