module.exports = async function (context, req) {
  const date = "2023-10-14T08:10:20.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

