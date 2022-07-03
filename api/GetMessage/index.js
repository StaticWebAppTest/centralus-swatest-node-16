module.exports = async function (context, req) {
  const date = "2022-07-03T19:08:10.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

