module.exports = async function (context, req) {
  const date = "2022-07-28T09:10:44.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

