module.exports = async function (context, req) {
  const date = "2023-02-03T08:12:41.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

