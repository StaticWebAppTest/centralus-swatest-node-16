module.exports = async function (context, req) {
  const date = "2024-07-28T07:09:42.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

