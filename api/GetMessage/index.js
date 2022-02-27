module.exports = async function (context, req) {
  const date = "2022-02-27T02:00:30.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

