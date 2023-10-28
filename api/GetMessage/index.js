module.exports = async function (context, req) {
  const date = "2023-10-28T13:08:47.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

