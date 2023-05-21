module.exports = async function (context, req) {
  const date = "2023-05-21T16:10:00.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

