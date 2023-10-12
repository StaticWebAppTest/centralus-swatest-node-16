module.exports = async function (context, req) {
  const date = "2023-10-12T04:10:32.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

