module.exports = async function (context, req) {
  const date = "2023-05-10T02:31:15.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

