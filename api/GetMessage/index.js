module.exports = async function (context, req) {
  const date = "2024-04-03T07:09:02.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

